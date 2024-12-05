# `dataOciCoreDrgRouteTables` Submodule <a name="`dataOciCoreDrgRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDrgRouteTables <a name="DataOciCoreDrgRouteTables" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables oci_core_drg_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables(scope: Construct, id: string, config: DataOciCoreDrgRouteTablesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig">DataOciCoreDrgRouteTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig">DataOciCoreDrgRouteTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetImportDrgRouteDistributionId">resetImportDrgRouteDistributionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreDrgRouteTablesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportDrgRouteDistributionId` <a name="resetImportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetImportDrgRouteDistributionId"></a>

```typescript
public resetImportDrgRouteDistributionId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDrgRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isConstruct"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformElement"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformDataSource"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreDrgRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreDrgRouteTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreDrgRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDrgRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgRouteTables">drgRouteTables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList">DataOciCoreDrgRouteTablesDrgRouteTablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList">DataOciCoreDrgRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgIdInput">drgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.importDrgRouteDistributionIdInput">importDrgRouteDistributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgId">drgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.importDrgRouteDistributionId">importDrgRouteDistributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `drgRouteTables`<sup>Required</sup> <a name="drgRouteTables" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgRouteTables"></a>

```typescript
public readonly drgRouteTables: DataOciCoreDrgRouteTablesDrgRouteTablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList">DataOciCoreDrgRouteTablesDrgRouteTablesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.filter"></a>

```typescript
public readonly filter: DataOciCoreDrgRouteTablesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList">DataOciCoreDrgRouteTablesFilterList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `drgIdInput`<sup>Optional</sup> <a name="drgIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgIdInput"></a>

```typescript
public readonly drgIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreDrgRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importDrgRouteDistributionIdInput`<sup>Optional</sup> <a name="importDrgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.importDrgRouteDistributionIdInput"></a>

```typescript
public readonly importDrgRouteDistributionIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `drgId`<sup>Required</sup> <a name="drgId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.drgId"></a>

```typescript
public readonly drgId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importDrgRouteDistributionId`<sup>Required</sup> <a name="importDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.importDrgRouteDistributionId"></a>

```typescript
public readonly importDrgRouteDistributionId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTables.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDrgRouteTablesConfig <a name="DataOciCoreDrgRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDrgRouteTablesConfig: dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.drgId">drgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#drg_id DataOciCoreDrgRouteTables#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#display_name DataOciCoreDrgRouteTables#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#id DataOciCoreDrgRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.importDrgRouteDistributionId">importDrgRouteDistributionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#import_drg_route_distribution_id DataOciCoreDrgRouteTables#import_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#state DataOciCoreDrgRouteTables#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `drgId`<sup>Required</sup> <a name="drgId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.drgId"></a>

```typescript
public readonly drgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#drg_id DataOciCoreDrgRouteTables#drg_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#display_name DataOciCoreDrgRouteTables#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreDrgRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#filter DataOciCoreDrgRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#id DataOciCoreDrgRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importDrgRouteDistributionId`<sup>Optional</sup> <a name="importDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.importDrgRouteDistributionId"></a>

```typescript
public readonly importDrgRouteDistributionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#import_drg_route_distribution_id DataOciCoreDrgRouteTables#import_drg_route_distribution_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#state DataOciCoreDrgRouteTables#state}.

---

### DataOciCoreDrgRouteTablesDrgRouteTables <a name="DataOciCoreDrgRouteTablesDrgRouteTables" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDrgRouteTablesDrgRouteTables: dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables = { ... }
```


### DataOciCoreDrgRouteTablesFilter <a name="DataOciCoreDrgRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDrgRouteTablesFilter: dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#name DataOciCoreDrgRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#values DataOciCoreDrgRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#regex DataOciCoreDrgRouteTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#name DataOciCoreDrgRouteTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#values DataOciCoreDrgRouteTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_tables#regex DataOciCoreDrgRouteTables#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDrgRouteTablesDrgRouteTablesList <a name="DataOciCoreDrgRouteTablesDrgRouteTablesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.get"></a>

```typescript
public get(index: number): DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference <a name="DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.drgId">drgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.importDrgRouteDistributionId">importDrgRouteDistributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.isEcmpEnabled">isEcmpEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.removeImportTrigger">removeImportTrigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables">DataOciCoreDrgRouteTablesDrgRouteTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `drgId`<sup>Required</sup> <a name="drgId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.drgId"></a>

```typescript
public readonly drgId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importDrgRouteDistributionId`<sup>Required</sup> <a name="importDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.importDrgRouteDistributionId"></a>

```typescript
public readonly importDrgRouteDistributionId: string;
```

- *Type:* string

---

##### `isEcmpEnabled`<sup>Required</sup> <a name="isEcmpEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.isEcmpEnabled"></a>

```typescript
public readonly isEcmpEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `removeImportTrigger`<sup>Required</sup> <a name="removeImportTrigger" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.removeImportTrigger"></a>

```typescript
public readonly removeImportTrigger: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreDrgRouteTablesDrgRouteTables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesDrgRouteTables">DataOciCoreDrgRouteTablesDrgRouteTables</a>

---


### DataOciCoreDrgRouteTablesFilterList <a name="DataOciCoreDrgRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreDrgRouteTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreDrgRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>[]

---


### DataOciCoreDrgRouteTablesFilterOutputReference <a name="DataOciCoreDrgRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTables } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreDrgRouteTablesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTables.DataOciCoreDrgRouteTablesFilter">DataOciCoreDrgRouteTablesFilter</a>

---


