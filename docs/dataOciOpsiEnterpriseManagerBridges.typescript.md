# `dataOciOpsiEnterpriseManagerBridges` Submodule <a name="`dataOciOpsiEnterpriseManagerBridges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiEnterpriseManagerBridges <a name="DataOciOpsiEnterpriseManagerBridges" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges oci_opsi_enterprise_manager_bridges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges(scope: Construct, id: string, config?: DataOciOpsiEnterpriseManagerBridgesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig">DataOciOpsiEnterpriseManagerBridgesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig">DataOciOpsiEnterpriseManagerBridgesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpsiEnterpriseManagerBridgesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiEnterpriseManagerBridges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiEnterpriseManagerBridges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiEnterpriseManagerBridges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiEnterpriseManagerBridges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiEnterpriseManagerBridges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.enterpriseManagerBridgeCollection">enterpriseManagerBridgeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList">DataOciOpsiEnterpriseManagerBridgesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.state">state</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `enterpriseManagerBridgeCollection`<sup>Required</sup> <a name="enterpriseManagerBridgeCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.enterpriseManagerBridgeCollection"></a>

```typescript
public readonly enterpriseManagerBridgeCollection: DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filter"></a>

```typescript
public readonly filter: DataOciOpsiEnterpriseManagerBridgesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList">DataOciOpsiEnterpriseManagerBridgesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpsiEnterpriseManagerBridgesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridges.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiEnterpriseManagerBridgesConfig <a name="DataOciOpsiEnterpriseManagerBridgesConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiEnterpriseManagerBridgesConfig: dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id DataOciOpsiEnterpriseManagerBridges#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id_in_subtree DataOciOpsiEnterpriseManagerBridges#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#display_name DataOciOpsiEnterpriseManagerBridges#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#id DataOciOpsiEnterpriseManagerBridges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#state DataOciOpsiEnterpriseManagerBridges#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id DataOciOpsiEnterpriseManagerBridges#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#compartment_id_in_subtree DataOciOpsiEnterpriseManagerBridges#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#display_name DataOciOpsiEnterpriseManagerBridges#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpsiEnterpriseManagerBridgesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#filter DataOciOpsiEnterpriseManagerBridges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#id DataOciOpsiEnterpriseManagerBridges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#state DataOciOpsiEnterpriseManagerBridges#state}.

---

### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection: dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection = { ... }
```


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems: dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems = { ... }
```


### DataOciOpsiEnterpriseManagerBridgesFilter <a name="DataOciOpsiEnterpriseManagerBridgesFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiEnterpriseManagerBridgesFilter: dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#name DataOciOpsiEnterpriseManagerBridges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#values DataOciOpsiEnterpriseManagerBridges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#regex DataOciOpsiEnterpriseManagerBridges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#name DataOciOpsiEnterpriseManagerBridges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#values DataOciOpsiEnterpriseManagerBridges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_enterprise_manager_bridges#regex DataOciOpsiEnterpriseManagerBridges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketName">objectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketStatusDetails">objectStorageBucketStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageNamespaceName">objectStorageNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `objectStorageBucketName`<sup>Required</sup> <a name="objectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketName"></a>

```typescript
public readonly objectStorageBucketName: string;
```

- *Type:* string

---

##### `objectStorageBucketStatusDetails`<sup>Required</sup> <a name="objectStorageBucketStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageBucketStatusDetails"></a>

```typescript
public readonly objectStorageBucketStatusDetails: string;
```

- *Type:* string

---

##### `objectStorageNamespaceName`<sup>Required</sup> <a name="objectStorageNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.objectStorageNamespaceName"></a>

```typescript
public readonly objectStorageNamespaceName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItems</a>

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection">DataOciOpsiEnterpriseManagerBridgesEnterpriseManagerBridgeCollection</a>

---


### DataOciOpsiEnterpriseManagerBridgesFilterList <a name="DataOciOpsiEnterpriseManagerBridgesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get"></a>

```typescript
public get(index: number): DataOciOpsiEnterpriseManagerBridgesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiEnterpriseManagerBridgesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>[]

---


### DataOciOpsiEnterpriseManagerBridgesFilterOutputReference <a name="DataOciOpsiEnterpriseManagerBridgesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiEnterpriseManagerBridges } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiEnterpriseManagerBridgesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiEnterpriseManagerBridges.DataOciOpsiEnterpriseManagerBridgesFilter">DataOciOpsiEnterpriseManagerBridgesFilter</a>

---



