# `dataOciOsManagementHubEvents` Submodule <a name="`dataOciOsManagementHubEvents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubEvents <a name="DataOciOsManagementHubEvents" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events oci_os_management_hub_events}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEvents(scope: Construct, id: string, config?: DataOciOsManagementHubEventsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig">DataOciOsManagementHubEventsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig">DataOciOsManagementHubEventsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetEventFingerprint">resetEventFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetEventSummary">resetEventSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetEventSummaryContains">resetEventSummaryContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetIsManagedByAutonomousLinux">resetIsManagedByAutonomousLinux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubEventsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetEventFingerprint` <a name="resetEventFingerprint" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetEventFingerprint"></a>

```typescript
public resetEventFingerprint(): void
```

##### `resetEventSummary` <a name="resetEventSummary" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetEventSummary"></a>

```typescript
public resetEventSummary(): void
```

##### `resetEventSummaryContains` <a name="resetEventSummaryContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetEventSummaryContains"></a>

```typescript
public resetEventSummaryContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsManagedByAutonomousLinux` <a name="resetIsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetIsManagedByAutonomousLinux"></a>

```typescript
public resetIsManagedByAutonomousLinux(): void
```

##### `resetResourceId` <a name="resetResourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubEvents resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isConstruct"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubEvents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubEvents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubEvents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubEvents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventCollection">eventCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList">DataOciOsManagementHubEventsEventCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList">DataOciOsManagementHubEventsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventFingerprintInput">eventFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventSummaryContainsInput">eventSummaryContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventSummaryInput">eventSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.isManagedByAutonomousLinuxInput">isManagedByAutonomousLinuxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.typeInput">typeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventFingerprint">eventFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventSummary">eventSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventSummaryContains">eventSummaryContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.type">type</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `eventCollection`<sup>Required</sup> <a name="eventCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventCollection"></a>

```typescript
public readonly eventCollection: DataOciOsManagementHubEventsEventCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList">DataOciOsManagementHubEventsEventCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubEventsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList">DataOciOsManagementHubEventsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `eventFingerprintInput`<sup>Optional</sup> <a name="eventFingerprintInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventFingerprintInput"></a>

```typescript
public readonly eventFingerprintInput: string;
```

- *Type:* string

---

##### `eventSummaryContainsInput`<sup>Optional</sup> <a name="eventSummaryContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventSummaryContainsInput"></a>

```typescript
public readonly eventSummaryContainsInput: string;
```

- *Type:* string

---

##### `eventSummaryInput`<sup>Optional</sup> <a name="eventSummaryInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventSummaryInput"></a>

```typescript
public readonly eventSummaryInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubEventsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isManagedByAutonomousLinuxInput`<sup>Optional</sup> <a name="isManagedByAutonomousLinuxInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.isManagedByAutonomousLinuxInput"></a>

```typescript
public readonly isManagedByAutonomousLinuxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.typeInput"></a>

```typescript
public readonly typeInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `eventFingerprint`<sup>Required</sup> <a name="eventFingerprint" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventFingerprint"></a>

```typescript
public readonly eventFingerprint: string;
```

- *Type:* string

---

##### `eventSummary`<sup>Required</sup> <a name="eventSummary" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventSummary"></a>

```typescript
public readonly eventSummary: string;
```

- *Type:* string

---

##### `eventSummaryContains`<sup>Required</sup> <a name="eventSummaryContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.eventSummaryContains"></a>

```typescript
public readonly eventSummaryContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.isManagedByAutonomousLinux"></a>

```typescript
public readonly isManagedByAutonomousLinux: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEvents.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubEventsConfig <a name="DataOciOsManagementHubEventsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsConfig: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#compartment_id DataOciOsManagementHubEvents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.eventFingerprint">eventFingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#event_fingerprint DataOciOsManagementHubEvents#event_fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.eventSummary">eventSummary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#event_summary DataOciOsManagementHubEvents#event_summary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.eventSummaryContains">eventSummaryContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#event_summary_contains DataOciOsManagementHubEvents#event_summary_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#id DataOciOsManagementHubEvents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#is_managed_by_autonomous_linux DataOciOsManagementHubEvents#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#resource_id DataOciOsManagementHubEvents#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#state DataOciOsManagementHubEvents#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#time_created_greater_than_or_equal_to DataOciOsManagementHubEvents#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#time_created_less_than DataOciOsManagementHubEvents#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.type">type</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#type DataOciOsManagementHubEvents#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#compartment_id DataOciOsManagementHubEvents#compartment_id}.

---

##### `eventFingerprint`<sup>Optional</sup> <a name="eventFingerprint" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.eventFingerprint"></a>

```typescript
public readonly eventFingerprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#event_fingerprint DataOciOsManagementHubEvents#event_fingerprint}.

---

##### `eventSummary`<sup>Optional</sup> <a name="eventSummary" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.eventSummary"></a>

```typescript
public readonly eventSummary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#event_summary DataOciOsManagementHubEvents#event_summary}.

---

##### `eventSummaryContains`<sup>Optional</sup> <a name="eventSummaryContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.eventSummaryContains"></a>

```typescript
public readonly eventSummaryContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#event_summary_contains DataOciOsManagementHubEvents#event_summary_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubEventsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#filter DataOciOsManagementHubEvents#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#id DataOciOsManagementHubEvents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isManagedByAutonomousLinux`<sup>Optional</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.isManagedByAutonomousLinux"></a>

```typescript
public readonly isManagedByAutonomousLinux: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#is_managed_by_autonomous_linux DataOciOsManagementHubEvents#is_managed_by_autonomous_linux}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#resource_id DataOciOsManagementHubEvents#resource_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#state DataOciOsManagementHubEvents#state}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#time_created_greater_than_or_equal_to DataOciOsManagementHubEvents#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#time_created_less_than DataOciOsManagementHubEvents#time_created_less_than}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsConfig.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#type DataOciOsManagementHubEvents#type}.

---

### DataOciOsManagementHubEventsEventCollection <a name="DataOciOsManagementHubEventsEventCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsEventCollection: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollection = { ... }
```


### DataOciOsManagementHubEventsEventCollectionItems <a name="DataOciOsManagementHubEventsEventCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsEventCollectionItems: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItems = { ... }
```


### DataOciOsManagementHubEventsEventCollectionItemsData <a name="DataOciOsManagementHubEventsEventCollectionItemsData" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsData.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsEventCollectionItemsData: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsData = { ... }
```


### DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails <a name="DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails = { ... }
```


### DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore <a name="DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore = { ... }
```


### DataOciOsManagementHubEventsEventCollectionItemsDataContent <a name="DataOciOsManagementHubEventsEventCollectionItemsDataContent" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContent.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsEventCollectionItemsDataContent: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContent = { ... }
```


### DataOciOsManagementHubEventsEventCollectionItemsSystemDetails <a name="DataOciOsManagementHubEventsEventCollectionItemsSystemDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetails.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsEventCollectionItemsSystemDetails: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetails = { ... }
```


### DataOciOsManagementHubEventsFilter <a name="DataOciOsManagementHubEventsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubEventsFilter: dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#name DataOciOsManagementHubEvents#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#values DataOciOsManagementHubEvents#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#regex DataOciOsManagementHubEvents#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#name DataOciOsManagementHubEvents#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#values DataOciOsManagementHubEvents#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_events#regex DataOciOsManagementHubEvents#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList <a name="DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference <a name="DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.exploitCves">exploitCves</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.initiatorId">initiatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.vmcore">vmcore</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList">DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.workRequestIds">workRequestIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails">DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exploitCves`<sup>Required</sup> <a name="exploitCves" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.exploitCves"></a>

```typescript
public readonly exploitCves: string[];
```

- *Type:* string[]

---

##### `initiatorId`<sup>Required</sup> <a name="initiatorId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.initiatorId"></a>

```typescript
public readonly initiatorId: string;
```

- *Type:* string

---

##### `vmcore`<sup>Required</sup> <a name="vmcore" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.vmcore"></a>

```typescript
public readonly vmcore: DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList">DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList</a>

---

##### `workRequestIds`<sup>Required</sup> <a name="workRequestIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.workRequestIds"></a>

```typescript
public readonly workRequestIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails">DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetails</a>

---


### DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList <a name="DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference <a name="DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.backtrace">backtrace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore">DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backtrace`<sup>Required</sup> <a name="backtrace" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.backtrace"></a>

```typescript
public readonly backtrace: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore">DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsVmcore</a>

---


### DataOciOsManagementHubEventsEventCollectionItemsDataContentList <a name="DataOciOsManagementHubEventsEventCollectionItemsDataContentList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference <a name="DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.contentAvailability">contentAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.contentLocation">contentLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.exploitDetectionLogContent">exploitDetectionLogContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.exploitObjectStoreLocation">exploitObjectStoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContent">DataOciOsManagementHubEventsEventCollectionItemsDataContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentAvailability`<sup>Required</sup> <a name="contentAvailability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.contentAvailability"></a>

```typescript
public readonly contentAvailability: string;
```

- *Type:* string

---

##### `contentLocation`<sup>Required</sup> <a name="contentLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.contentLocation"></a>

```typescript
public readonly contentLocation: string;
```

- *Type:* string

---

##### `exploitDetectionLogContent`<sup>Required</sup> <a name="exploitDetectionLogContent" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.exploitDetectionLogContent"></a>

```typescript
public readonly exploitDetectionLogContent: string;
```

- *Type:* string

---

##### `exploitObjectStoreLocation`<sup>Required</sup> <a name="exploitObjectStoreLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.exploitObjectStoreLocation"></a>

```typescript
public readonly exploitObjectStoreLocation: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubEventsEventCollectionItemsDataContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContent">DataOciOsManagementHubEventsEventCollectionItemsDataContent</a>

---


### DataOciOsManagementHubEventsEventCollectionItemsDataList <a name="DataOciOsManagementHubEventsEventCollectionItemsDataList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference <a name="DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.additionalDetails">additionalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList">DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList">DataOciOsManagementHubEventsEventCollectionItemsDataContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.eventCount">eventCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.eventFingerprint">eventFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.timeFirstOccurred">timeFirstOccurred</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsData">DataOciOsManagementHubEventsEventCollectionItemsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList">DataOciOsManagementHubEventsEventCollectionItemsDataAdditionalDetailsList</a>

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.content"></a>

```typescript
public readonly content: DataOciOsManagementHubEventsEventCollectionItemsDataContentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataContentList">DataOciOsManagementHubEventsEventCollectionItemsDataContentList</a>

---

##### `eventCount`<sup>Required</sup> <a name="eventCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.eventCount"></a>

```typescript
public readonly eventCount: number;
```

- *Type:* number

---

##### `eventFingerprint`<sup>Required</sup> <a name="eventFingerprint" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.eventFingerprint"></a>

```typescript
public readonly eventFingerprint: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeFirstOccurred`<sup>Required</sup> <a name="timeFirstOccurred" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.timeFirstOccurred"></a>

```typescript
public readonly timeFirstOccurred: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubEventsEventCollectionItemsData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsData">DataOciOsManagementHubEventsEventCollectionItemsData</a>

---


### DataOciOsManagementHubEventsEventCollectionItemsList <a name="DataOciOsManagementHubEventsEventCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubEventsEventCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubEventsEventCollectionItemsOutputReference <a name="DataOciOsManagementHubEventsEventCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.data">data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList">DataOciOsManagementHubEventsEventCollectionItemsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.eventDetails">eventDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.eventId">eventId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.eventSummary">eventSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.systemDetails">systemDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList">DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.timeOccurred">timeOccurred</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItems">DataOciOsManagementHubEventsEventCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.data"></a>

```typescript
public readonly data: DataOciOsManagementHubEventsEventCollectionItemsDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsDataList">DataOciOsManagementHubEventsEventCollectionItemsDataList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `eventDetails`<sup>Required</sup> <a name="eventDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.eventDetails"></a>

```typescript
public readonly eventDetails: string;
```

- *Type:* string

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.eventId"></a>

```typescript
public readonly eventId: string;
```

- *Type:* string

---

##### `eventSummary`<sup>Required</sup> <a name="eventSummary" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.eventSummary"></a>

```typescript
public readonly eventSummary: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```typescript
public readonly isManagedByAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemDetails`<sup>Required</sup> <a name="systemDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.systemDetails"></a>

```typescript
public readonly systemDetails: DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList">DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOccurred`<sup>Required</sup> <a name="timeOccurred" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.timeOccurred"></a>

```typescript
public readonly timeOccurred: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubEventsEventCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItems">DataOciOsManagementHubEventsEventCollectionItems</a>

---


### DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList <a name="DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference <a name="DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.kspliceEffectiveKernelVersion">kspliceEffectiveKernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osKernelRelease">osKernelRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osKernelVersion">osKernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osName">osName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osSystemVersion">osSystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetails">DataOciOsManagementHubEventsEventCollectionItemsSystemDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `kspliceEffectiveKernelVersion`<sup>Required</sup> <a name="kspliceEffectiveKernelVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.kspliceEffectiveKernelVersion"></a>

```typescript
public readonly kspliceEffectiveKernelVersion: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `osKernelRelease`<sup>Required</sup> <a name="osKernelRelease" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osKernelRelease"></a>

```typescript
public readonly osKernelRelease: string;
```

- *Type:* string

---

##### `osKernelVersion`<sup>Required</sup> <a name="osKernelVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osKernelVersion"></a>

```typescript
public readonly osKernelVersion: string;
```

- *Type:* string

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osName"></a>

```typescript
public readonly osName: string;
```

- *Type:* string

---

##### `osSystemVersion`<sup>Required</sup> <a name="osSystemVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.osSystemVersion"></a>

```typescript
public readonly osSystemVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubEventsEventCollectionItemsSystemDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsSystemDetails">DataOciOsManagementHubEventsEventCollectionItemsSystemDetails</a>

---


### DataOciOsManagementHubEventsEventCollectionList <a name="DataOciOsManagementHubEventsEventCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubEventsEventCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubEventsEventCollectionOutputReference <a name="DataOciOsManagementHubEventsEventCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList">DataOciOsManagementHubEventsEventCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollection">DataOciOsManagementHubEventsEventCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubEventsEventCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionItemsList">DataOciOsManagementHubEventsEventCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubEventsEventCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsEventCollection">DataOciOsManagementHubEventsEventCollection</a>

---


### DataOciOsManagementHubEventsFilterList <a name="DataOciOsManagementHubEventsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubEventsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubEventsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a>[]

---


### DataOciOsManagementHubEventsFilterOutputReference <a name="DataOciOsManagementHubEventsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubEventsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEvents.DataOciOsManagementHubEventsFilter">DataOciOsManagementHubEventsFilter</a>

---



