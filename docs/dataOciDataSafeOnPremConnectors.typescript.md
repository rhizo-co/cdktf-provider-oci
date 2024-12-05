# `dataOciDataSafeOnPremConnectors` Submodule <a name="`dataOciDataSafeOnPremConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeOnPremConnectors <a name="DataOciDataSafeOnPremConnectors" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors oci_data_safe_on_prem_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors(scope: Construct, id: string, config: DataOciDataSafeOnPremConnectorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig">DataOciDataSafeOnPremConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig">DataOciDataSafeOnPremConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOnPremConnectorId">resetOnPremConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOnPremConnectorLifecycleState">resetOnPremConnectorLifecycleState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeOnPremConnectorsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOnPremConnectorId` <a name="resetOnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOnPremConnectorId"></a>

```typescript
public resetOnPremConnectorId(): void
```

##### `resetOnPremConnectorLifecycleState` <a name="resetOnPremConnectorLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.resetOnPremConnectorLifecycleState"></a>

```typescript
public resetOnPremConnectorLifecycleState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeOnPremConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isConstruct"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformElement"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeOnPremConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeOnPremConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeOnPremConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeOnPremConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList">DataOciDataSafeOnPremConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectors">onPremConnectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList">DataOciDataSafeOnPremConnectorsOnPremConnectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorIdInput">onPremConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorLifecycleStateInput">onPremConnectorLifecycleStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorId">onPremConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorLifecycleState">onPremConnectorLifecycleState</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeOnPremConnectorsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList">DataOciDataSafeOnPremConnectorsFilterList</a>

---

##### `onPremConnectors`<sup>Required</sup> <a name="onPremConnectors" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectors"></a>

```typescript
public readonly onPremConnectors: DataOciDataSafeOnPremConnectorsOnPremConnectorsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList">DataOciDataSafeOnPremConnectorsOnPremConnectorsList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeOnPremConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onPremConnectorIdInput`<sup>Optional</sup> <a name="onPremConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorIdInput"></a>

```typescript
public readonly onPremConnectorIdInput: string;
```

- *Type:* string

---

##### `onPremConnectorLifecycleStateInput`<sup>Optional</sup> <a name="onPremConnectorLifecycleStateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorLifecycleStateInput"></a>

```typescript
public readonly onPremConnectorLifecycleStateInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onPremConnectorId`<sup>Required</sup> <a name="onPremConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorId"></a>

```typescript
public readonly onPremConnectorId: string;
```

- *Type:* string

---

##### `onPremConnectorLifecycleState`<sup>Required</sup> <a name="onPremConnectorLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.onPremConnectorLifecycleState"></a>

```typescript
public readonly onPremConnectorLifecycleState: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeOnPremConnectorsConfig <a name="DataOciDataSafeOnPremConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeOnPremConnectorsConfig: dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id DataOciDataSafeOnPremConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#access_level DataOciDataSafeOnPremConnectors#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id_in_subtree DataOciDataSafeOnPremConnectors#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#display_name DataOciDataSafeOnPremConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#id DataOciDataSafeOnPremConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.onPremConnectorId">onPremConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_id DataOciDataSafeOnPremConnectors#on_prem_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.onPremConnectorLifecycleState">onPremConnectorLifecycleState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_lifecycle_state DataOciDataSafeOnPremConnectors#on_prem_connector_lifecycle_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id DataOciDataSafeOnPremConnectors#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#access_level DataOciDataSafeOnPremConnectors#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#compartment_id_in_subtree DataOciDataSafeOnPremConnectors#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#display_name DataOciDataSafeOnPremConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeOnPremConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#filter DataOciDataSafeOnPremConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#id DataOciDataSafeOnPremConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onPremConnectorId`<sup>Optional</sup> <a name="onPremConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.onPremConnectorId"></a>

```typescript
public readonly onPremConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_id DataOciDataSafeOnPremConnectors#on_prem_connector_id}.

---

##### `onPremConnectorLifecycleState`<sup>Optional</sup> <a name="onPremConnectorLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsConfig.property.onPremConnectorLifecycleState"></a>

```typescript
public readonly onPremConnectorLifecycleState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#on_prem_connector_lifecycle_state DataOciDataSafeOnPremConnectors#on_prem_connector_lifecycle_state}.

---

### DataOciDataSafeOnPremConnectorsFilter <a name="DataOciDataSafeOnPremConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeOnPremConnectorsFilter: dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#name DataOciDataSafeOnPremConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#values DataOciDataSafeOnPremConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#regex DataOciDataSafeOnPremConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#name DataOciDataSafeOnPremConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#values DataOciDataSafeOnPremConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_on_prem_connectors#regex DataOciDataSafeOnPremConnectors#regex}.

---

### DataOciDataSafeOnPremConnectorsOnPremConnectors <a name="DataOciDataSafeOnPremConnectorsOnPremConnectors" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors.Initializer"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeOnPremConnectorsOnPremConnectors: dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeOnPremConnectorsFilterList <a name="DataOciDataSafeOnPremConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeOnPremConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeOnPremConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>[]

---


### DataOciDataSafeOnPremConnectorsFilterOutputReference <a name="DataOciDataSafeOnPremConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeOnPremConnectorsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsFilter">DataOciDataSafeOnPremConnectorsFilter</a>

---


### DataOciDataSafeOnPremConnectorsOnPremConnectorsList <a name="DataOciDataSafeOnPremConnectorsOnPremConnectorsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference <a name="DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeOnPremConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.availableVersion">availableVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.createdVersion">createdVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors">DataOciDataSafeOnPremConnectorsOnPremConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableVersion`<sup>Required</sup> <a name="availableVersion" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.availableVersion"></a>

```typescript
public readonly availableVersion: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdVersion`<sup>Required</sup> <a name="createdVersion" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.createdVersion"></a>

```typescript
public readonly createdVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeOnPremConnectorsOnPremConnectors;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeOnPremConnectors.DataOciDataSafeOnPremConnectorsOnPremConnectors">DataOciDataSafeOnPremConnectorsOnPremConnectors</a>

---



