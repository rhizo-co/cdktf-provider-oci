# `dataOciCoreDrgRouteTableRouteRules` Submodule <a name="`dataOciCoreDrgRouteTableRouteRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDrgRouteTableRouteRules <a name="DataOciCoreDrgRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules oci_core_drg_route_table_route_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules(scope: Construct, id: string, config: DataOciCoreDrgRouteTableRouteRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig">DataOciCoreDrgRouteTableRouteRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig">DataOciCoreDrgRouteTableRouteRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetRouteType">resetRouteType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreDrgRouteTableRouteRulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRouteType` <a name="resetRouteType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.resetRouteType"></a>

```typescript
public resetRouteType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDrgRouteTableRouteRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isConstruct"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformElement"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformDataSource"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreDrgRouteTableRouteRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreDrgRouteTableRouteRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreDrgRouteTableRouteRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDrgRouteTableRouteRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteRules">drgRouteRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList">DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList">DataOciCoreDrgRouteTableRouteRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteTableIdInput">drgRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.routeTypeInput">routeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteTableId">drgRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.routeType">routeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `drgRouteRules`<sup>Required</sup> <a name="drgRouteRules" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteRules"></a>

```typescript
public readonly drgRouteRules: DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList">DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.filter"></a>

```typescript
public readonly filter: DataOciCoreDrgRouteTableRouteRulesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList">DataOciCoreDrgRouteTableRouteRulesFilterList</a>

---

##### `drgRouteTableIdInput`<sup>Optional</sup> <a name="drgRouteTableIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteTableIdInput"></a>

```typescript
public readonly drgRouteTableIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreDrgRouteTableRouteRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `routeTypeInput`<sup>Optional</sup> <a name="routeTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.routeTypeInput"></a>

```typescript
public readonly routeTypeInput: string;
```

- *Type:* string

---

##### `drgRouteTableId`<sup>Required</sup> <a name="drgRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.drgRouteTableId"></a>

```typescript
public readonly drgRouteTableId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routeType`<sup>Required</sup> <a name="routeType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.routeType"></a>

```typescript
public readonly routeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDrgRouteTableRouteRulesConfig <a name="DataOciCoreDrgRouteTableRouteRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDrgRouteTableRouteRulesConfig: dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.drgRouteTableId">drgRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#drg_route_table_id DataOciCoreDrgRouteTableRouteRules#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#id DataOciCoreDrgRouteTableRouteRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.routeType">routeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#route_type DataOciCoreDrgRouteTableRouteRules#route_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `drgRouteTableId`<sup>Required</sup> <a name="drgRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.drgRouteTableId"></a>

```typescript
public readonly drgRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#drg_route_table_id DataOciCoreDrgRouteTableRouteRules#drg_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreDrgRouteTableRouteRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#filter DataOciCoreDrgRouteTableRouteRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#id DataOciCoreDrgRouteTableRouteRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routeType`<sup>Optional</sup> <a name="routeType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesConfig.property.routeType"></a>

```typescript
public readonly routeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#route_type DataOciCoreDrgRouteTableRouteRules#route_type}.

---

### DataOciCoreDrgRouteTableRouteRulesDrgRouteRules <a name="DataOciCoreDrgRouteTableRouteRulesDrgRouteRules" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDrgRouteTableRouteRulesDrgRouteRules: dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules = { ... }
```


### DataOciCoreDrgRouteTableRouteRulesFilter <a name="DataOciCoreDrgRouteTableRouteRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDrgRouteTableRouteRulesFilter: dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#name DataOciCoreDrgRouteTableRouteRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#values DataOciCoreDrgRouteTableRouteRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#regex DataOciCoreDrgRouteTableRouteRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#name DataOciCoreDrgRouteTableRouteRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#values DataOciCoreDrgRouteTableRouteRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_table_route_rules#regex DataOciCoreDrgRouteTableRouteRules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList <a name="DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.get"></a>

```typescript
public get(index: number): DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference <a name="DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.attributes">attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.isBlackhole">isBlackhole</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.isConflict">isConflict</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.nextHopDrgAttachmentId">nextHopDrgAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.routeProvenance">routeProvenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.routeType">routeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules">DataOciCoreDrgRouteTableRouteRulesDrgRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.attributes"></a>

```typescript
public readonly attributes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isBlackhole`<sup>Required</sup> <a name="isBlackhole" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.isBlackhole"></a>

```typescript
public readonly isBlackhole: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isConflict`<sup>Required</sup> <a name="isConflict" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.isConflict"></a>

```typescript
public readonly isConflict: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nextHopDrgAttachmentId`<sup>Required</sup> <a name="nextHopDrgAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.nextHopDrgAttachmentId"></a>

```typescript
public readonly nextHopDrgAttachmentId: string;
```

- *Type:* string

---

##### `routeProvenance`<sup>Required</sup> <a name="routeProvenance" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.routeProvenance"></a>

```typescript
public readonly routeProvenance: string;
```

- *Type:* string

---

##### `routeType`<sup>Required</sup> <a name="routeType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.routeType"></a>

```typescript
public readonly routeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreDrgRouteTableRouteRulesDrgRouteRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesDrgRouteRules">DataOciCoreDrgRouteTableRouteRulesDrgRouteRules</a>

---


### DataOciCoreDrgRouteTableRouteRulesFilterList <a name="DataOciCoreDrgRouteTableRouteRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreDrgRouteTableRouteRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreDrgRouteTableRouteRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>[]

---


### DataOciCoreDrgRouteTableRouteRulesFilterOutputReference <a name="DataOciCoreDrgRouteTableRouteRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreDrgRouteTableRouteRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreDrgRouteTableRouteRulesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteTableRouteRules.DataOciCoreDrgRouteTableRouteRulesFilter">DataOciCoreDrgRouteTableRouteRulesFilter</a>

---



