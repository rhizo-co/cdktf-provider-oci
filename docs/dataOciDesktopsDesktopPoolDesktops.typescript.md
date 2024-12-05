# `dataOciDesktopsDesktopPoolDesktops` Submodule <a name="`dataOciDesktopsDesktopPoolDesktops` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPoolDesktops <a name="DataOciDesktopsDesktopPoolDesktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops oci_desktops_desktop_pool_desktops}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops(scope: Construct, id: string, config: DataOciDesktopsDesktopPoolDesktopsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig">DataOciDesktopsDesktopPoolDesktopsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig">DataOciDesktopsDesktopPoolDesktopsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDesktopsDesktopPoolDesktopsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPoolDesktops resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPoolDesktops resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDesktopsDesktopPoolDesktops to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDesktopsDesktopPoolDesktops that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPoolDesktops to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolDesktopCollection">desktopPoolDesktopCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList">DataOciDesktopsDesktopPoolDesktopsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolIdInput">desktopPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolId">desktopPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `desktopPoolDesktopCollection`<sup>Required</sup> <a name="desktopPoolDesktopCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolDesktopCollection"></a>

```typescript
public readonly desktopPoolDesktopCollection: DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filter"></a>

```typescript
public readonly filter: DataOciDesktopsDesktopPoolDesktopsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList">DataOciDesktopsDesktopPoolDesktopsFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `desktopPoolIdInput`<sup>Optional</sup> <a name="desktopPoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolIdInput"></a>

```typescript
public readonly desktopPoolIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDesktopsDesktopPoolDesktopsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `desktopPoolId`<sup>Required</sup> <a name="desktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolId"></a>

```typescript
public readonly desktopPoolId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolDesktopsConfig <a name="DataOciDesktopsDesktopPoolDesktopsConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolDesktopsConfig: dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#compartment_id DataOciDesktopsDesktopPoolDesktops#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.desktopPoolId">desktopPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#desktop_pool_id DataOciDesktopsDesktopPoolDesktops#desktop_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#availability_domain DataOciDesktopsDesktopPoolDesktops#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#display_name DataOciDesktopsDesktopPoolDesktops#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#id DataOciDesktopsDesktopPoolDesktops#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#state DataOciDesktopsDesktopPoolDesktops#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#compartment_id DataOciDesktopsDesktopPoolDesktops#compartment_id}.

---

##### `desktopPoolId`<sup>Required</sup> <a name="desktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.desktopPoolId"></a>

```typescript
public readonly desktopPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#desktop_pool_id DataOciDesktopsDesktopPoolDesktops#desktop_pool_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#availability_domain DataOciDesktopsDesktopPoolDesktops#availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#display_name DataOciDesktopsDesktopPoolDesktops#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDesktopsDesktopPoolDesktopsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#filter DataOciDesktopsDesktopPoolDesktops#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#id DataOciDesktopsDesktopPoolDesktops#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#state DataOciDesktopsDesktopPoolDesktops#state}.

---

### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection: dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection = { ... }
```


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems: dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems = { ... }
```


### DataOciDesktopsDesktopPoolDesktopsFilter <a name="DataOciDesktopsDesktopPoolDesktopsFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

const dataOciDesktopsDesktopPoolDesktopsFilter: dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#name DataOciDesktopsDesktopPoolDesktops#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#values DataOciDesktopsDesktopPoolDesktops#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#regex DataOciDesktopsDesktopPoolDesktops#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#name DataOciDesktopsDesktopPoolDesktops#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#values DataOciDesktopsDesktopPoolDesktops#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#regex DataOciDesktopsDesktopPoolDesktops#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.desktopId">desktopId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.isAssigned">isAssigned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `desktopId`<sup>Required</sup> <a name="desktopId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.desktopId"></a>

```typescript
public readonly desktopId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `isAssigned`<sup>Required</sup> <a name="isAssigned" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.isAssigned"></a>

```typescript
public readonly isAssigned: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems</a>

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection</a>

---


### DataOciDesktopsDesktopPoolDesktopsFilterList <a name="DataOciDesktopsDesktopPoolDesktopsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get"></a>

```typescript
public get(index: number): DataOciDesktopsDesktopPoolDesktopsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDesktopsDesktopPoolDesktopsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a>[]

---


### DataOciDesktopsDesktopPoolDesktopsFilterOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDesktopsDesktopPoolDesktops } from 'rhizo-co-terraform-provider-oci'

new dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDesktopsDesktopPoolDesktopsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter">DataOciDesktopsDesktopPoolDesktopsFilter</a>

---



